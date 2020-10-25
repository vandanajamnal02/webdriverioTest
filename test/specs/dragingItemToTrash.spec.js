describe('Drag and drop', () => {
    it('should be able to put documents in the trash', () => {
        // lod the url
        browser.url('https://marcojakob.github.io/dart-dnd/basic/');

        // Wait for the bin to be there
        const trashCan = $('.trash');
        trashCan.waitForDisplayed(15000);

        // First check how many documents whe have
        expect($$('.document').length).toEqual(
            4,
            'There are less documents, this is not correct',
        );

        // Drag the first document to the trash can
        $$('.document')[0].dragAndDrop(trashCan);

        // for demo purpose
        browser.pause(1000)

        // Check the amount of documents is 3
        expect($$('.document').length).toEqual(3);

        // Check the trash can is full
        expect($('.trash.full').waitForDisplayed(15000)).toEqual(
            true,
            'The trash can is not filled!'
        );

        // Drag the first document to the trash can
        $$('.document')[0].dragAndDrop(trashCan);

        // for demo purpose
        browser.pause(1000)

        // Check the amount of documents is 2
        expect($$('.document').length).toEqual(2);

        // Drag the first document to the trash can
        $$('.document')[0].dragAndDrop(trashCan);

        // for demo purpose
        browser.pause(1000);

        // Check the amount of documents is 1
        expect($$('.document').length).toEqual(1);

        // Drag the last document to the trash can
        $$('.document')[0].dragAndDrop(trashCan);

        // for demo purpose
        browser.pause(1000);

        // Check the amount of documents is 0
        expect($$('.document').length).toEqual(0);
    });
});