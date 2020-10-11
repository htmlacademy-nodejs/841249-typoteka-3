'use strict';


class OffersService {
  constructor(offers) {
    this._offers = offers;
  }

  findAll() {
    const offers = this._offers.reduce((acc, offer) => {

      acc.add(offer);
      return acc;
    }, new Set());

    return [...offers];
  }

  findOne(id) {
    return this._offers.find((item) => item.id === id);
  }

  findOneComments(id) {
    const targerOffer = this.findOne(id);
    return targerOffer.comments;
  }
}

module.exports = OffersService;
