'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

const route = new Router();

module.exports.offers = (app, service) => {
  app.use(`/offers`, route);

  route.get(`/`, (req, res) => {
    const offers = service.findAll();
    res.status(HttpCode.OK)
      .json(offers);
  });

  route.get(`/:offerId`, (req, res) => {
    const {offerId} = req.params;
    const offer = service.findOne(offerId);

    if (!offer) {
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${offerId}`);
    }

    return res.status(HttpCode.OK)
        .json(offer);
  });

  route.get(`/:offerId/comments`, (req, res) => {
    const {offerId} = req.params;
    const comments = service.findOneComments(offerId);

    if (!comments) {
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${offerId}`);
    }

    return res.status(HttpCode.OK)
        .json(comments);
  });

  route.post(`/`, (req, res) => {
    const body = req.body;
    const newOffers = service.addOffer(body);
    res.status(HttpCode.OK)
      .json(newOffers);
  });

  route.put(`/:offerId`, (req, res) => {
    const {offerId} = req.params;
    const body = req.body;
    const newOffers = service.editOffer(offerId, body);
    res.status(HttpCode.OK)
      .json(newOffers);
  });

  route.delete(`/:offerId/comments/:commentId`, (req, res) => {
    const {offerId, commentId} = req.params;
    const newOffers = service.deleteComment(offerId, commentId);
    res.status(HttpCode.OK)
      .json(newOffers);
  });

  route.delete(`/:offerId`, (req, res) => {
    const {offerId} = req.params;
    const newOffers = service.deleteOffer(offerId);
    res.status(HttpCode.OK)
      .json(newOffers);
  });

  route.post(`/:offerId/comments`, (req, res) => {
    const {offerId} = req.params;
    const body = req.body;
    const newOffers = service.addComment(offerId, body);
    res.status(HttpCode.OK)
      .json(newOffers);
  });
};
