import PaymentsTablePending from "components/Dashboard/Payments/PaymentsTable/PaymentsTablePending/PaymentsTablePending";
import PaymentsTableSuccess from "components/Dashboard/Payments/PaymentsTable/PaymentsTableSuccess/PaymentsTableSuccess";

export const customersData = Array(15).fill({
  email: <span className="customers-table__email">email@acmecorp.com</span>,

  description: "Customer Name",

  defaultSource: (
    <div className="customers-table__card-number">
      <span>VISA</span> ....4242
    </div>
  ),

  created: "May 4, 6:53AM",
});

export const paymentsData = [
  {
    amount: (
      <div className="payments-table__amount">
        <b>$4,242.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 9CER2A3",

    customer: "janedoe@gmail.com",

    date: "May 31, 2020, 11:58 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$106.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 4DLFJD3",

    customer: "sammy108@email.com",

    date: "May 31, 2020, 1:38 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$7.77</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 84HD943",

    customer: "gogo4564@gmail.com",

    date: "May 28, 2020, 9:45 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$5.55</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 67JGHF34",

    customer: "bobbysmi@gmail.com",

    date: "May 27, 2020, 6:44 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$20.50</b> USD <PaymentsTablePending />
      </div>
    ),

    description: "Invoice 43GN452",

    customer: "jacksonjames@gmail.com",

    date: "May 27, 2020, 2:54 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$450.50</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 75930GH",

    customer: "bethgrand@gmail.com",

    date: "May 25, 2020, 12:52 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$5.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 2I84JD8",

    customer: "hayleys@gmail.com",

    date: "May 24, 2020, 10:23 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$52.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 4HFHIDL",

    customer: "pheobe@gmail.com",

    date: "May 24, 2020, 9:14 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$54.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 56YT763",

    customer: "tucker45@gmail.com",

    date: "May 24, 2020, 5:23 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$68.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 87RFY56",

    customer: "chapjones@gmail.com",

    date: "May 22, 2020, 7:44 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$432.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 9CER2A3",

    customer: "timmytim@gmail.com",

    date: "May 20, 2020, 6:23 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$1,244.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 456G2AZ",

    customer: "busterbl@gmail.com",

    date: "May 10, 2020, 11:27 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$353.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 5HF743L",

    customer: "lionel10@gmail.com",

    date: "May 10, 2020, 9:34 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$42.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 73RFH48",

    customer: "kevinblue@gmail.com",

    date: "May 10, 2020, 7:33 AM",
  },

  {
    amount: (
      <div className="payments-table__amount">
        <b>$242.00</b> USD <PaymentsTableSuccess />
      </div>
    ),

    description: "Invoice 45JU783",

    customer: "jilljameston@gmail.com",

    date: "May 17, 2020, 11:49 AM",
  },
];
