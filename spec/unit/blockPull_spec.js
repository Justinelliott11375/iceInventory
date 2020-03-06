const sequelize = require("../../src/db/models/index").sequelize;
const Report = require("../../src/db/models").Report;
const BlockPull = require("../../src/db/models").BlockPull;

describe('BlockPull', () => {
    
    beforeEach((done) => {
        let currentDate = new Date();
        currentDate.setHours(0,0,0,0);
        this.report;
        this.blockPull;
        sequelize.sync({force: true}).then((res) => {

            Report.create({
                date: currentDate
            })
            .then((report) => {
                this.report = report;

                BlockPull.create({
                    blocks: 6,
                    days: 2,
                    blockNumber: '111A',
                    reportId: this.report.id
                })
                .then((blockPull) => {
                    this.blockPull = blockPull;
                    done();
                })
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });
    });

    describe('#create()', () => {

        it('should create a blockPull object with blocks, days, and associated report', (done) => {
            BlockPull.create({
                blocks: 5,
                days: 3,
                blockNumber: '111B',
                reportId: this.report.id
            })
            .then((blockPull)  => {
                expect(blockPull.blocks).toBe(5);
                expect(blockPull.days).toBe(3);
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            })
        });
        
    });

    it('should not create a blockPull with missing days, blocks, blockNumber, or reportId', (done) => {
        BlockPull.create({
            blocks: 4
        })
        .then((blockPull) => {
            // code should not execute because of validation error
            // expectations in catch block
            done();
        })
        .catch((err) => {
            expect(err.message).toContain("BlockPull.days cannot be null");
            expect(err.message).toContain("BlockPull.reportId cannot be null");
            done();
        })

    });
    
    describe('#setReport()', () => {
        
        let reportDate = new Date();
        it('should associate a report and a blockPull together', (done) => {
            Report.create({
                date: reportDate
            })
            .then((newReport) => {
                expect(this.blockPull.reportId).toBe(this.report.id);
                this.blockPull.setReport(newReport)
                .then((blockPull) => {
                    expect(blockPull.reportId).toBe(newReport.id);
                    done();
                });
            });
        });
        
    });

    describe('#getReport', () => {
        
        it('should return the associated Report', (done) => {
            this.blockPull.getReport()
            .then((associatedReport) => {
                expect(associatedReport.date.toDateString()).toEqual(currentDate.toDateString());
                done();
            });
        });
        
    });
    
    

});


