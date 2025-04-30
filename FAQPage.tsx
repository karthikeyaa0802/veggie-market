
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const navigate = useNavigate();
  
  const faqCategories = [
    {
      title: "Orders & Shipping",
      questions: [
        {
          question: "How do I place an order?",
          answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or log in, enter your shipping details, and choose a payment method."
        },
        {
          question: "What are your delivery areas?",
          answer: "We currently deliver to most major cities and surrounding areas. You can check if we deliver to your area by entering your zip code during checkout or on our shipping information page."
        },
        {
          question: "How long will it take to receive my order?",
          answer: "Most orders are delivered within 1-2 business days. For specific delivery windows, please check the shipping options available at checkout. We also offer same-day delivery in select areas for orders placed before 2 PM."
        },
        {
          question: "Is there a minimum order value?",
          answer: "Yes, our minimum order value is $25. Orders below this amount will incur a small order fee of $5."
        }
      ]
    },
    {
      title: "Products & Quality",
      questions: [
        {
          question: "How fresh are your products?",
          answer: "We source our products directly from farmers and suppliers daily. Most produce is harvested within 24-48 hours of delivery to ensure maximum freshness."
        },
        {
          question: "Are all your products organic?",
          answer: "While we prioritize organic products, not all items are certified organic. Each product listing clearly indicates whether it is organic, locally grown, or conventionally grown."
        },
        {
          question: "What if I'm not satisfied with the quality of my products?",
          answer: "We have a 100% satisfaction guarantee. If you're not happy with any product, please contact our customer service within 24 hours of delivery, and we'll provide a refund or replacement."
        },
        {
          question: "How do you handle product substitutions?",
          answer: "If an item in your order is unavailable, we'll suggest a similar product for substitution. You can choose to accept the substitution, select a different alternative, or receive a refund for that item."
        }
      ]
    },
    {
      title: "Account & Payment",
      questions: [
        {
          question: "How do I create an account?",
          answer: "To create an account, click on the 'Sign Up' button in the top right corner of our website. Fill in your details, and you'll be ready to shop with us."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. We also offer the option to pay with cash on delivery in select areas."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We do not store your credit card details on our servers."
        },
        {
          question: "Can I save my payment information for future orders?",
          answer: "Yes, you can save your payment information securely in your account for faster checkout on future orders. You can manage your saved payment methods in your account settings."
        }
      ]
    },
    {
      title: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "Due to the perishable nature of our products, we don't accept returns. However, if you're unsatisfied with the quality of any product, please contact us within 24 hours of delivery for a refund or replacement."
        },
        {
          question: "How do I report an issue with my order?",
          answer: "Please contact our customer service team via the 'Contact Us' page or call our support line within 24 hours of receiving your order. Include your order number and photos of the affected products if possible."
        },
        {
          question: "How long does it take to process a refund?",
          answer: "Refunds are typically processed within 3-5 business days. The time it takes for the refund to appear in your account depends on your payment provider or bank."
        },
        {
          question: "What if my order is missing items?",
          answer: "If your order is missing any items, please contact our customer service team immediately. We'll either deliver the missing items or process a refund for those products."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-8 text-center">
            Find answers to common questions about our products, ordering process, delivery, and more.
            If you can't find the information you need, please don't hesitate to contact us.
          </p>
          
          {faqCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger className="px-4 hover:text-veggie-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Still Have Questions?</h2>
            <p className="text-gray-600 mb-4">
              Our customer support team is here to help you with any additional questions or concerns.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-veggie-600 hover:bg-veggie-700"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
