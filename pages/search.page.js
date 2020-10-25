import Page from './page';


class SearchPage  extends Page {

    open(path){
        super.open(path);
    }

    get searchInput() {
        return $('search_input_react');
    }

}

export default new SearchPage();