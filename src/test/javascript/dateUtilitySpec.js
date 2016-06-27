define(['bytepushers', 'bytepushersDateUtility'], function(BytePushers) {
    describe("bytepushers tests", function() {
        it('should defined BytePushers.DateUtility', function() {
            expect(BytePushers.DateUtility).toBeDefined();
        });

        it("sort dates ascending", function(){
            var date1 = new Date(97,2,30), date2 = new Date(99, 6, 23);
            expect(BytePushers.DateUtility.date_sort_asc(date1, date2)).toEqual(-1);
        });

        it("validate date string", function(){
            var date = '11/17/2000';
            expect(BytePushers.DateUtility.isValidDateString(date)).toEqual(true);
            date = '11/17/20000';
            expect(BytePushers.DateUtility.isValidDateString(date)).toEqual(false);
        });

        it("validate date string", function(){
            var date = new Date('11/17/2000');
            expect(BytePushers.DateUtility.formatDateToString(date)).toEqual('11/17/2000');
        });
    });
});
