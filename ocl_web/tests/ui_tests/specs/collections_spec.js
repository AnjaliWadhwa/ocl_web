'use strict';

var LoginPage = require('../pages/login_page.js');
var LogoutPage = require('../pages/logout_page.js');
var CollectionPage = require('../pages/collections_page.js');
var data = require('../data/test_data.json');

describe('OCL Collections Page', function () {

    var loginPage;
    var logoutPage;
    var collectionPage;

    beforeEach(function () {
        loginPage = new LoginPage();
        logoutPage = new LogoutPage();
        collectionPage = new CollectionPage();
    });

    it('should login', function () {
        loginPage.visit();
        loginPage.login(data.username,data.password);

        expect((loginPage.loginStatus).getText()).toEqual('Successfully signed in as awadhwa.');
    });

    it('should create collection', function () {
        collectionPage.createNewUserCollection( data.short_code,
            data.col_name,
            data.full_name,
            data.supported_locale
        );

        expect((collectionPage.status).getText()).toEqual('Collection created');
    });

    it('should edit collection', function () {
        collectionPage.editCollection(data.col_desc, data.ext_id);

        expect((collectionPage.status).getText()).toEqual('Collection updated');
        expect((collectionPage.updatedDescValue).getText()).toContain('collection description');
        expect((collectionPage.updatedExtIdValue).getText()).toContain('1.1');
    });

    it('should delete collection', function () {
        collectionPage.deleteCollection();

        expect((collectionPage.status).getText()).toEqual('Collection Deleted');
    });

     it('should logout', function () {
         logoutPage.logout();

         expect((loginPage.loginStatus).getText()).toEqual('You have signed out.');
     });

});

