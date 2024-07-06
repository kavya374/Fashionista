import React, { useState } from "react";
import "./Queries.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Queries = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const [email, setEmail] = useState("");
  const [text, setText] = useState('');


  return (
    <>
      <div className="acc">
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(0)}>
            <h2>
              {" "}
              What should I do if the product I receive is damaged or defective?
            </h2>
            <button>{activeIndex === 0 ? <FaMinus /> : <FaPlus />}</button>
          </div>
          {activeIndex === 0 && (
            <div className="accordion-body">
              If you receive a damaged or defective product, please contact our
              customer support team immediately. We will arrange for a
              replacement or refund as per our return policy.
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(1)}>
            <h2>Can I modify or cancel my order after it has been placed?</h2>
            <button>{activeIndex === 1 ? <FaMinus /> : <FaPlus />}</button>
          </div>
          {activeIndex === 1 && (
            <div className="accordion-body">
              We strive to process orders quickly. If you need to modify or
              cancel your order, please contact us as soon as possible. We will
              do our best to accommodate your request before the order is
              shipped.
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(2)}>
            <h2>How can I contact customer support?</h2>
            <button>{activeIndex === 2 ? <FaMinus /> : <FaPlus />}</button>
          </div>
          {activeIndex === 2 && (
            <div className="accordion-body">
              You can reach our customer support team via email at
              support@example.com or by phone at 1-800-555-1234 during business
              hours.
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(3)}>
            <h2>Can I return or exchange items?</h2>
            <button>{activeIndex === 3 ? <FaMinus /> : <FaPlus />}</button>
          </div>
          {activeIndex === 3 && (
            <div className="accordion-body">
              Yes, we accept returns and exchanges within 14 days of purchase.
              Items must be unused and in their original packaging along with
              their price tags.
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(4)}>
            <h2>More Queries? Click here and Email us NOW! </h2>
            <button>{activeIndex === 4 ? <FaMinus /> : <FaPlus />}</button>
          </div>
          {activeIndex === 4 && (
            <div className="accordion-body">
              <div className="loginform" style={{margin:'auto'}}>
          <form>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Your concern:</label>
              <textarea
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                 rows="5" 
                cols="31"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default Queries;
