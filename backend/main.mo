import Hash "mo:base/Hash";

import Text "mo:base/Text";
import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";

actor {
  // Types
  type Content = {
    title: Text;
    heroImage: Text;
    heroHeadline: Text;
    mainContent: Text;
    sidebarContent: Text;
  };

  type FormData = {
    name: ?Text;
    email: Text;
    message: ?Text;
  };

  // Stable variables
  stable var content: Content = {
    title = "V0 Website Clone";
    heroImage = "https://loremflickr.com/g/1200/400/website?lock=1";
    heroHeadline = "Welcome to our V0 Website Clone";
    mainContent = "This is the main content area. Here you can add your primary information.";
    sidebarContent = "This is the sidebar content. You can add additional information or navigation here.";
  };

  // Mutable variables
  var formSubmissions = HashMap.HashMap<Nat, FormData>(0, Nat.equal, Nat.hash);
  var submissionCounter: Nat = 0;

  // Query call to retrieve website content
  public query func getContent() : async Content {
    return content;
  };

  // Update call to modify website content
  public func updateContent(newContent: Content) : async Result.Result<(), Text> {
    content := newContent;
    #ok(())
  };

  // Update call to handle form submissions
  public func submitForm(formData: FormData) : async Result.Result<Nat, Text> {
    submissionCounter += 1;
    formSubmissions.put(submissionCounter, formData);
    #ok(submissionCounter)
  };

  // Query to get all form submissions
  public query func getFormSubmissions() : async [(Nat, FormData)] {
    return Iter.toArray(formSubmissions.entries());
  };
}
