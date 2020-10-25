import DragDrop from '../../pages/dragAndDrop.page'


describe('Should drag and drop elements', ()=>{

    it.skip('should drag and drop element', ()=>{
        browser.url(`https://crossbrowsertesting.github.io/drag-and-drop.html`)
        let comA = $("#draggable");
        let comB = $('#droppable')
        comA.waitForDisplayed();
        comB.waitForDisplayed();
        comA.dragAndDrop(comB)

        browser.pause(3000);

    })

    it('real drag and drop ', ()=>{
        DragDrop.open();
        DragDrop.dragelemAtoB();
        browser.pause(3000);
        expect(DragDrop.dropableArea).toHaveTextContaining('Dropped!');
    })


    
})

