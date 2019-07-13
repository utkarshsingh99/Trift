exports.insertPaymentInfo = (data) => {

  let insertedPaymentInfo = `INSERT INTO PaymentInformation VALUES (NULL,'${data.userId}', '${data.full_name}','${data.card_number}', '${data.CVV}', '${data.card_exp}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);`
  return insertedPaymentInfo;
}