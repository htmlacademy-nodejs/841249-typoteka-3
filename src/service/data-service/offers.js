'use strict';
const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../../constants.js`);

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

  addOffer(newOffer) {
    this._offers.push({id: nanoid(MAX_ID_LENGTH), ...newOffer});
    return this._offers;
  }

  editOffer(id, targetOffer) {
    this._offers = this._offers.map((offer) => {
      if (offer.id === id) {
        offer = {id: offer.id, ...targetOffer};
      }
      return offer;
    });
    return this._offers;
  }

  deleteOffer(id) {
    return this._offers.filter((offer) => offer.id !== id);
  }

  deleteComment(offerId, commentId) {
    this.offers = this._offers.map((offer) => {
      if (offer.id === offerId) {
        offer.comments = offer.comments.filter((comment) => comment.id !== commentId);
      }
      return offer;
    });
    return this._offers;
  }

  addComment(offerId, newComment) {
    this._offers.forEach((offer) => {
      if (offer.id === offerId) {
        offer.comments.push({id: nanoid(MAX_ID_LENGTH), ...newComment});
      }
    });
    return this._offers;
  }
}

module.exports = OffersService;
