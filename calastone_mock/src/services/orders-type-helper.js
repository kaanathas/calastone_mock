var faker = require('faker');
const { response } = require('express');
module.exports.SubscriptionOrder=(order)=>{

var orderSubResponce={
  "id": "7051b083-13a8-4db4-9a9a-15fa1850dab3",
  "status": "Received",
  "createdUtc": "2019-05-01T13:41:20.2468377+00:00",
  "updatedUtc": "2019-05-01T13:41:20.2468377+00:00",
  "submitDetails": {
  "orderType": "SubscriptionOrder",
  "orderReference": "TestSub001",
  "fundProviderIdentifier": "TFP1462",
  "createdUtc": "2019-05-01T13:41:20.2468377+00:00",
  "transactions": [
  {
  "transactionType": "Subscription",
  "fundIdentifier": {
  "type": "Isin",
  "identifier": "AA1234567890"
  },
  "orderAmount": {
  "amount": 1000,
  "currency": "GBP"
  },
  "accountDetails": {
  "accountId": "Account1"
  }
  }
  ]
  }
  
  }
return orderSubResponce
}


module.exports.RedemptionOrder=(order)=>{
    var RedemptionOrderRes={
      "id": "9e1eb644-2562-49d6-a864-5bd17d82649b",
      "status": "Received",
      "createdUtc": "2019-05-01T15:13:31.2474561+00:00",
      "updatedUtc": "2019-05-01T15:13:31.2474561+00:00",
      "submitDetails": {
      "orderType": "RedemptionOrder",
      "orderReference": "TestRed001",
      "fundProviderIdentifier": "TFP1462",
      "createdUtc": "2019-05-01T15:13:31.2474561+00:00",
      "transactions": [
      {
      "transactionType": "Redemption",
      "fundIdentifier": {
      "type": "Isin",
      "identifier": "AA1234567890",
      "name": "Name1",
      "supplementaryIdentifier": "Code1"
      },
      "unit": "100",
      "requestedSettlementCurrency": "GBP",
      "requestedNavCurrency": "GBP",
      "chargeDetails": {
      "type": "BEND",
      "rate": "1.0"
      },
      "commissionDetails": {
      "type": "BEND",
      "rate": "0.8",
      "percentageWaived": "0.4"
      },
      "accountDetails": {
      "accountId": "Account1",
      "subAccount": "SubAccount1",
      "agentCode": "Agent1"
      },
      "roundingDirection": "Up",
      "group1Or2Units": "Group1"
      }
      ]
      }
      
      }
      return RedemptionOrderRes
}

module.exports.allOrders=()=>{
  var orders=[
    {
    "id": "9ad81cba-2a87-4863-87b7-61600f736cd5",
    "orderReference": "TestRed019",
    "status": "Confirmed",
    "createdUtc": "2019-05-01T15:42:53.6322757+00:00",
    "updatedUtc": "2019-05-01T15:45:07.92412+00:00"
    },
    {
    "id": "b76d247d-f7a2-4d2e-8dcd-50b1ab208e40",
    "orderReference": "TestSw010",
    "status": "Confirmed",
    "createdUtc": "2019-05-01T15:30:20.7824982+00:00",
    "updatedUtc": "2019-05-01T15:32:34.704384+00:00"
    },
    ]
    return orders;
}


module.exports.orderByUpdatedDate=()=>{
  var orderInTheDate= [
    {
    "id": "9ad81cba-2a87-4863-87b7-61600f736cd5",
    "orderReference": "TestRed019",
    "status": "Confirmed",
    "createdUtc": "2019-05-01T15:42:53.6322757+00:00",
    "updatedUtc": "2019-05-01T15:45:07.92412+00:00"
    },
    {
    "id": "b76d247d-f7a2-4d2e-8dcd-50b1ab208e40",
    "orderReference": "TestSw010",
    "status": "Confirmed",
    "createdUtc": "2019-05-01T15:30:20.7824982+00:00",
    "updatedUtc": "2019-05-01T15:32:34.704384+00:00"
    },
    {
    "id": "9e1eb644-2562-49d6-a864-5bd17d82649b",
    "orderReference": "TestRed018",
    "status": "Invalid",
    "createdUtc": "2019-05-01T15:13:31.2474561+00:00",
    "updatedUtc": "2019-05-01T15:13:43.012758+00:00"
    }
    ]
    return orderInTheDate
}

module.exports.orderByeId=()=>{
var data={
  "id": "9ad81cba-2a87-4863-87b7-61600f736cd5",
  "status": "Confirmed",
  "createdUtc": "2019-05-01T15:42:53.6322757+00:00",
  "updatedUtc": "2019-05-01T15:45:07.92412+00:00",
  "submitDetails": {
  "orderType": "RedemptionOrder",
  "orderReference": "TestRed019",
  "fundProviderIdentifier": "TFP1462",
  "createdUtc": "2019-05-01T15:42:53.6322757+00:00",
  "transactions": [
  {
  "transactionType": "Redemption",
  "fundIdentifier": {
  "type": "Isin",
  "identifier": "AA1234567890",
  "name": "Name1",
  "supplementaryIdentifier": "Code1"
  },
  "unit": "100",
  "requestedSettlementCurrency": "GBP",
  "requestedNavCurrency": "GBP",
  "chargeDetails": {
  "type": "BEND",
  "rate": "1.0"
  },
  "commissionDetails": {
  "type": "BEND",
  "rate": "0.8",
  "percentageWaived": "0.4"
  },
  "accountDetails": {
  "accountId": "Account1",
  "subAccount": "SubAccount1",
  "agentCode": "Agent1"
  },
  "group1Or2Units": "Group1"
  }
  ]
  },
  "validationDetails": {
  "valid": true,
  "createdUtc": "2019-05-01T15:43:05.764563+00:00",
  "orderReference": "TestRed019"
  },
  "acceptDetails": {
  "accepted": true,
  "createdUtc": "2019-05-01T15:43:26.10971+00:00",
  "orderReference": "TestRed019",
  "expectedTradeDateTime": "2019-05-01T00:00:00",
  "expectedCashSettlementDate": "2019-05-01T00:00:00"
  },
  "confirmDetails": {
  "createdUtc": "2019-05-01T15:45:07.92412+00:00",
  "orderReference": "TestRed019",
  "transactionDetails": [
  {
  "transactionType": "Redemption",
  "dealReference": "e3bf3eb3f9",
  "units": 100,
  "grossAmount": {
  "a mount ": 100,
  "currency": "GBP"
  },
  "settlementAmount": {
  "a mount ": 100,
  "currency": "GBP"
  },
  "fundIdentifier": {
  "type": "Isin",
  "identifier": "AA1234567890"
  },
  "accountDetails": {
  "accountId": "Account1"
  },
  "tradeDateTime": "2019-05-01T00:00:00"
  }
  ]
  }
  }

  return data;
}
