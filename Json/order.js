const orderNumber = {
  "error_code": 0,
  "data": {
    "uid": "1",
    "username": "12154545",
    "name": "吴系挂",
    "groupid": 2,
    "reg_time": "1436864169",
    "last_login_time": "0",
  }
};
const orderUnifiedorder = {
  "message": {
    "pay": {
      "timeStamp": "1564730510",
      "nonceStr": "SReWbt3nEmpJo3tr",
      "package": "prepay_id=wx02152148991420a3b39a90811023326800",
      "signType": "MD5",
      "paySign": "3A6943C3B865FA2B2C825CDCB33C5304"
    },
    "order_number": "HMDD20190802000000000422"
  },
  "meta": {
    "msg": "预付订单生成成功",
    "status": 200
  }
};
const chkOrder = {
  "message": "支付成功",
  "meta": {
    "msg": "验证成功",
    "status": 200
  }
}

export default {
  orderNumber,
  orderUnifiedorder,
  chkOrder
}
