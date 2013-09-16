//check login page

describe('login check', function() {
    beforeEach(function () {
        console.log('navigating to login page');
        browser().navigateTo("../admin#/");
//        pause();
        sleep(2) ;
    });
    it('should click on login button with valid credentials then logout', function() {
            using('.main-content').input('user.email').enter('kumar@manusis.com');
            expect(using('.main-content').input('user.email').val()).toBe('kumar@manusis.com');
            using('.main-content').input('user.password').enter('manusis');
            expect(using('.main-content').input('user.password').val()).toBe('manusis');
            element('.inline').click();                       //check remember me
            element('.clearfix > button').click();            //click on login button
//            expect(browser().window().hash()).toBe('/');
           /* element('.light-blue > a').click();
            element('.light-blue ul li:nth-child(3) a').click();
            expect(browser().window().hash()).toBe('/');
            expect(using('.main-content').input('user.email').val()).toBe('kumar@manusis.com');
            pause();
            expect(using('.main-content').input('user.password').val()).toBe('manusis');*/
//            pause();
        sleep(2) ;
    });

//    it('should click on logout', function() {
//        element('.light-blue > a').click();
//        pause();
//        element('.light-blue ul li:nth-child(3) a').click();
//        pause();
//        expect(browser().window().hash()).toBe('/');
//        pause();
//    })

    /*it('should click on login button with empty fields', function() {
        using('.main-content').input('user.email').enter('');
        expect(using('.main-content').input('user.email').val()).toBe('');
        using('.main-content').input('user.password').enter('');
        expect(using('.main-content').input('user.password').val()).toBe('');
        element('.clearfix > button').click();
        pause();
        expect(browser().window().hash()).toBe('/');
        expect('.widget-main span.red span').toBe('Missing credentials');           //not working
        pause();
    });*/


    /*it('should click on login button with invalid credentials', function() {
        using('.main-content').input('user.email').enter('raji@manusis.com');
        expect(using('.main-content').input('user.email').val()).toBe('raji@manusis.com');
        using('.main-content').input('user.password').enter('barton$123');
        element('.inline').click();
        element('.clearfix > button').click();
        expect(browser().window().hash()).toBe('/');
        pause();
    });*/

});
