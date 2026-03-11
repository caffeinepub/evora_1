import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  // Order type
  type Order = {
    customerName : Text;
    email : Text;
    phone : Text;
    address : Text;
    quantity : Nat;
    status : Text; // "pending" or "confirmed"
  };

  // Contact form type
  type ContactForm = {
    name : Text;
    email : Text;
    message : Text;
  };

  // Persistent data structures
  let orders = Map.empty<Text, Order>();
  let contacts = Map.empty<Text, ContactForm>();

  // Add new order
  public shared ({ caller }) func placeOrder(customerName : Text, email : Text, phone : Text, address : Text, quantity : Nat) : async () {
    let order : Order = {
      customerName;
      email;
      phone;
      address;
      quantity;
      status = "pending";
    };
    orders.add(email, order);
  };

  // Get all orders
  public query ({ caller }) func getAllOrders() : async [Order] {
    orders.values().toArray();
  };

  // Update order status
  public shared ({ caller }) func updateOrderStatus(email : Text, newStatus : Text) : async () {
    switch (orders.get(email)) {
      case (null) { Runtime.trap("Order not found") };
      case (?order) {
        let updatedOrder : Order = {
          customerName = order.customerName;
          email = order.email;
          phone = order.phone;
          address = order.address;
          quantity = order.quantity;
          status = newStatus;
        };
        orders.add(email, updatedOrder);
      };
    };
  };

  // Add contact form submission
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let contact : ContactForm = {
      name;
      email;
      message;
    };
    contacts.add(email, contact);
  };

  // Get all contact messages
  public query ({ caller }) func getAllContacts() : async [ContactForm] {
    contacts.values().toArray();
  };
};
