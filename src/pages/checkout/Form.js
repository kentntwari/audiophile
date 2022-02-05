import React, { useCallback } from 'react';

const Form = () => {
  const inputText = useCallback((id, placeholder, label) => {
    return (
      <div className="flex flex-col gap-3">
        <label htmlFor={id} className="font-bold text-[12px] tracking-[-0.21px]">
          {label}
        </label>
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          className="w-full px-6 py-4 placeholder:font-bold
           placeholder:text-black-full placeholder:opacity-40
         block border border-[#cfcfcf] rounded-md"
        />
      </div>
    );
  }, []);

  const inputRadio = useCallback((id, name) => {
    return (
      <div className="p-4 flex justify-start items-center gap-3 border border-[#c4c4c4] rounded-lg">
        <input
          type="radio"
          id={id}
          name={name}
          className="border read-only:border-black-plus read-only:border-opacity-20
           read-only:bg-white-full focus:ring-0 focus:text-orange-full"
        />
        <label htmlFor={id} className="font-bold text-[14px] tracking-[-0.25px]">
          {name}
        </label>
      </div>
    );
  }, []);

  return (
    <form className="w-full bg-white-full p-6 flex flex-col justify-start items-start gap-8">
      <h4>checkout</h4>

      <div className="w-full flex flex-col gap-8">
        <section className="flex flex-col gap-6">
          <p className="type-subtitle">billing details</p>

          <section className="w-full grid grid-cols-1 gap-8">
            {inputText('name', 'Alexei ward', 'Name')}
            {inputText('email', 'alexei@gmail.com', 'Email Address')}
            {inputText('phone', '+1 202-555-0136', 'Phone Number')}
          </section>
        </section>

        <section className="flex flex-col gap-6">
          <p className="type-subtitle">shipping info</p>

          <section className="w-full grid grid-cols-1 gap-8">
            {inputText('address', '1137 Williams Avenue', 'Your Address')}
            {inputText('zip', '10001', 'Zip Code')}
            {inputText('city', 'New York', 'City')}
            {inputText('country', 'United States', 'Country')}
          </section>
        </section>

        <section className="flex flex-col gap-6">
          <p className="type-subtitle">Payment details</p>

          <section className="w-full grid grid-cols-1 gap-8">
            <fieldset className="grid grid-cols-1 gap-4">
              <span className="font-bold text-black-full text-[12px] -tracking-[0.21px]">
                Payment Method
              </span>

              {inputRadio('e_money', 'e-Money')}
              {inputRadio('delivery', 'Cash on Delivery')}
            </fieldset>

            {inputText('e_money_number', '238521993', 'e-Money Number')}
            {inputText('e_money_pin', '6891', 'e-money PIN')}
          </section>
        </section>
      </div>
    </form>
  );
};

export default Form;
