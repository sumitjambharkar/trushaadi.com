export default async function displayRazorpay() {
  const data = await fetch("http://localhost:1337/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: "rzp_test_dgT6dQaeQPEj6s",
    currency: data.currency,
    amount: data.amount,
    name: "MyShaddi.com",
    description: "Wallet Transaction",
    image: "http://localhost:1337/logo.jpg",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    

    },
    prefill: {
      name: "xxxxxx",
      email: "sujam",
      contact: "",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
