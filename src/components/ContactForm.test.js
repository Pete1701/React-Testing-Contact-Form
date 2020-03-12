import React from "react";
import { render, fireEvent, getByText, getByLabelText, findByTestId } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly", () => {
    render(<ContactForm />);
  });

test("form adds full name, email and message", () => {
    const { getByLabelText, getByText } = render(<ContactForm />);
  
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, { target: { name: 'first name', value: 'Bil' }});
    fireEvent.change(lastNameInput, { target: { name: 'last name', value: 'Gates' }});
    fireEvent.change(emailInput, { target: { name: 'email', value: 'bg@ms.com' }});
    fireEvent.change(messageInput, { target: { name: 'message', value: 'Dinner at 8?' }});

    findByTestId("submit").then(res=>{
        fireEvent.click(res);
    });

    fireEvent.change(firstNameInput, { target: { register: 'minLength', value: 2 }});

    // const submitInput = findByTestId("submit");
    // fireEvent.click(submitInput);
});