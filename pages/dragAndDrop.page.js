import Page from './page'


class DragDrop extends Page {


    get elementA(){
        return $("#draggable");
    }

    get elementB(){
        return $('#droppable')
    }

    get dropableArea(){
        return $('#droppable>p')
    }

    open(){
        super.open("https://crossbrowsertesting.github.io/drag-and-drop.html");
    }


    dragelemAtoB() {
        this.elementA.waitForDisplayed();
        this.elementA.dragAndDrop(this.elementB)
    }

}

export default new DragDrop();