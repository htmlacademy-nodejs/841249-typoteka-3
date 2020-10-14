'use strict';


class SearchService {
  constructor(offers) {
    this._offers = offers;
  }

  findAll(query) {
    const queryString = query.toString();
    const result = this._offers.filter((offer) => {
      return offer.title.indexOf(queryString) === 0;
    });
    return result;
  }
}

module.exports = SearchService;
