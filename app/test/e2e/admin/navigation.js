//navigation
describe('myStore layout', function() {
    beforeEach(function () {
        console.log('navigating to main page');
        browser().navigateTo("../admin.html#/");
        element('#sidebar ul.nav-list>li:nth-child(5)>a ').click();
        expect(browser().window().hash()).toBe('/entity/ms.navigation');
//      pause();
    });

    //add new navigation
it('should add new navigation', function() {
//        expect(repeater('#myTable tbody tr').count()).toBe(2);
        //click on add new
        element('div#page-content div.dt-header .add-record-icon').click();
        expect(browser().window().hash()).toBe('/entity/ms.navigation/_add');
//        pause();
        using('.controls').input('formData[element.name]').enter('header1');
        expect(using('.controls').input('formData[element.name]').val()).toBe('header1');
        //click on add record
        element('.mf-links div div').click();
        //click on name column
        element('#myTable tbody tr td:nth-child(3)').click();
        using('.mf-name').input('formData[element.name]').enter('headername');
        expect(using('.mf-name').input('formData[element.name]').val()).toBe('headername');
        //click on url column
        element('#myTable tbody tr td:nth-child(4)').click();
        using('.mf-url').input('formData[element.name]').enter('/headerurl');
        expect(using('.mf-url').input('formData[element.name]').val()).toBe('/headerurl');
        element('.mf-links div div').click();   //add record
        confirmOK();
//        confirmCancel();
        element('#myTable tbody tr:nth-child(2) .btn-delete').click();
        //save
        element('#page-content a').click();
        expect(browser().window().hash()).toBe('/entity/ms.navigation');
        expect(element('#myTable tbody tr:last').html()).toContain('headername');
        expect(repeater('#myTable tbody tr').count()).toBe(3);
//        pause();
    });

     //search records
        it('should search in navigation', function() {
            expect(browser().window().hash()).toBe('/entity/ms.navigation');
            input('searchTxt').enter('headername');
            expect(element('#myTable tbody tr').html()).toContain('headername');
//            pause();

        }) ;

    it('should edit the navigation record', function() {
        expect(browser().window().hash()).toBe('/entity/ms.navigation');
        element('div#page-content table tbody tr:last  td .btn-edit').click();
//        ect(browser().window().hash()).toContain('/edit');
        using('.controls').input('formData[element.name]').enter('header2');
        expect(using('.controls').input('formData[element.name]').val()).toBe('header2');
        //click on add record
        element('.mf-links div div').click();
        //click on name column
        element('#myTable tbody tr td:nth-child(3)').click();
        using('.mf-name').input('formData[element.name]').enter('headername1');
        expect(using('.mf-name').input('formData[element.name]').val()).toBe('headername1');
        //click on url column
        element('#myTable tbody tr td:nth-child(4)').click();
        using('.mf-url').input('formData[element.name]').enter('/headerurl1');
        expect(using('.mf-url').input('formData[element.name]').val()).toBe('/headerurl1');
//        element('.mf-links div div').click();   //add record
        confirmOK();
//        confirmCancel();
        element('#myTable tbody tr:nth-child(2) .btn-delete').click();
        //save
        element('#page-content a').click();
        expect(browser().window().hash()).toBe('/entity/ms.navigation');
        expect(element('#myTable tbody tr:last').html()).toContain('headername1');
        expect(repeater('#myTable tbody tr').count()).toBe(3);
        pause();
    })  ;

    //duplicate
    it('should click on To Duplicate products', function() {
        element('div#page-content table tbody tr:last td .btn-duplicate').click();
        element('div#duplicateModal #duplicate').click();  //click on duplicate button
//        element('div#duplicateModal .btn-inverse').click();  //click on cancel button
        pause();
        expect(element('#page-content table tbody tr:last').html()).toContain('headername1');
        expect(repeater('div#page-content table tbody tr').count()).toBe(4);
    });

    //delete the navigation record
it('should delete the navigation record', function() {
     expect(browser().window().hash()).toBe('/entity/ms.navigation');
     expect(repeater('#myTable tbody tr').count()).toBe(4);
     confirmOK();
     //        confirmCancel();
    element('div#page-content table tbody tr:last td .btn-delete').click();
     expect(repeater('#myTable tbody tr').count()).toBe(3);
     pause();
     });
});

