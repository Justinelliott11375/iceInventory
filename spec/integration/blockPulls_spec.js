const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/reports";

const sequelize = require("../../src/db/models/index").sequelize;
const Report = require("../../src/db/models").Report;
const BlockPull = require("../../src/db/models").BlockPull;

describe('routes: blockPulls', () => {
    
    beforeEach((done) => {
        this.report;
        this.blockPull;

        sequelize.sync({force: true}).then((res) => {

            Report.create({
                date: new Date()
            })
            .then((report) => {
                this.report = report;

                BlockPull.create({
                    blockNumber: '333A',
                    days: 4,
                    reportId: this.report.id
                })
                .then((blockPull) => {
                    this.blockPull = blockPull;
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                })
            })
        })
 

    describe('GET /reports/:reportId/blockPulls/new', () => {
        
        it('should render new blockPull form', (done) => {
            request.get(`${base}/${this.report.id}/blockPulls/new`, (err, res, body) => {
                expect(err).toBeNull();
                expect(body).toContain("New Block Pull");
                done();
            });
        });
        
    });

    describe('POST /reports/:reportId/blockPulls/create', () => {
        
        const options = {
            url: `${base}/${this.report.id}/blockPulls/create`,
            form: {
                days: 2,
                blockNumber: '20777A'
            }
        };
        request.post(options, (err, res, body) => {
            BlockPull.findOne({where: {blockNumber: '20777A'}})
            .then((blockPull) => {
                expect(blockPull).not.toBeNull();
                expect(blockPull.blockNumber).toBe("20777A");
                expect(blockNumber.days).toBe(2);
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });
    });
    
})
});
