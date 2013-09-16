//
//
//describe("myStore navigation", function() {
//    beforeEach(function() {
//        console.log("Navigating to main page");
//        browser().navigateTo('../mcms.html#/');
//        // pause();
//    });
//
//    //Add NewRecord in Navigation Table Table
//   it('should click on button To Add new Records ', function() {
//        element('#sidebar ul li:nth-child(5) a').click();
//        pause();
//        expect(browser().window().hash()).toBe('/entity/navigations');
//        element('div#page-content div > a').click();
//        using('.mf-name').input('formData[element.name]').enter('Navlast');
//        expect(using('.mf-name').input('formData[element.name]').val()).toBe('Navlast');
//        element('.mf-links div.btn%20ng-scope').click();
//        element('.mf-links table tr td:nth-child(3)').click();
//        using('.mf-links table tbody tr .mf-name').input('formData[element.name]').enter('prolast');
//        expect(using('.mf-links table tbody tr .mf-name').input('formData[element.name]').val()).toBe('prolast');
//        element('.mf-links table tr td:nth-child(4)').click();
////      using('.mf-links table tbody tr .mf-linksto').select('value1').option('prolast');
//        element('div#page-content  > a').click();
//        sleep(3);
//        expect(element('#page-content table tbody tr:last').html()).toContain('Navlast');
//        expect(repeater('div#page-content table tbody tr').count()).toBe(2);
//
// });
//
//
//    //Edit Navigation Record
//
//    it('should click on stores To Edit a Navigation Record', function() {
//        element('#sidebar ul li:nth-child(5) a').click();
//        expect(browser().window().hash()).toBe('/entity/navigations');
//        element('div#page-content table tbody tr:last  td .btn-edit').click();
//        sleep(2);
//        using('.mf-name').input('formData[element.name]').enter('NavEdit');
//        expect(using('.mf-name').input('formData[element.name]').val()).toBe('NavEdit');
//        element('.mf-links table tr td:nth-child(3)').click();
//        using('.mf-links table tbody tr .mf-name').input('formData[element.name]').enter('prolast');
//        expect(using('.mf-links table tbody tr .mf-name').input('formData[element.name]').val()).toBe('prolast');
//        element('.mf-links table tr td:nth-child(4)').click();
////      using('.mf-links table tbody tr .mf-linksto').select('value1').option('prolast');
//        element('div#page-content  > a').click();
//        sleep(3);
//        expect(element('#page-content table tbody tr:last').html()).toContain('NavEdit');
////      expect(repeater('div#page-content table tbody tr').count()).toBe(2);
//
// });
//
//
// //Search Record
//
// it('should perform search', function() {
// element('#sidebar ul li:nth-child(5) a').click();
// expect(browser().window().hash()).toBe('/entity/navigations');
// input('searchTxt').enter('');
// expect(element('#page-content table tbody tr').html()).toContain('');
//
// });
//
// //Make Dupliate Copy a Record
//
//    it('should click on stores To Duplicate a Navigation Record', function() {
//        element('#sidebar ul li:nth-child(5) a').click();
//        expect(browser().window().hash()).toBe('/entity/navigations');
//        element('div#page-content table tbody tr:last  td .btn-duplicate').click();
//        sleep(2);
//        element('div.controls  input:nth-child(2)').click();     //Click on duplicate button
//        element('div.controls  input:nth-child(2)').click();     //click on cancel button
//        expect(element('#page-content table tbody tr:last').html()).toContain('NavEdit');
//        expect(repeater('div#page-content table tbody tr').count()).toBe(2);
//
//    });
//
//
//    //Delete Record From Store Table
//
//    it('should click on stores To Delete a Navigation Record', function() {
//        element('#sidebar ul li:nth-child(5) a').click();
//        expect(browser().window().hash()).toBe('/entity/navigations');
//        confirmOK();
////      confirmCancel();
//        element('div#page-content table tbody tr:last  td .btn-delete').click();
//        sleep(2);
//        expect(browser().window().hash()).toBe('/entity/navigations');
//        expect(repeater('div#page-content table tbody tr').count()).toBe(1);
//        pause();
// });
//});
//
