import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = ()=>
{
    // for the form we will create the form ref
    const formref = useRef();
    // loading and the setloading form the form 
    const [loading , setloading ] = useState(false);
    // usestate for the form 
    const[form , setform] = useState({name : " ", email : " " , message : " "});

    // handle change function
    const handlechange= ({target :{name  ,value}})=>
    {
        setform({...form , [name] : value})
    }


    // emailjs service id:- service_2b8u9b3

    // and the handle submit function
    const handlesubmit = async(e)=>
    {
        e.preventDefault();
        setloading(true)
        try {
            //use the email js
            // also it will accept the template id
            await emailjs.send('service_2b8u9b3'  , 
                'template_909rlar' , 
                {from_name :form.name  ,
                    to_name : "Chandrangshu" , 
                    form_email :  form.email , 
                    to_email :"srcs.pro5759@gmail.com" , 
                    message :form.message
                },
                "5KPhpeODGOscJfJL8" // this is the public key
                )
                // if allof these successfull
                setloading(false)
                alert("your msg. has been sent...")
                // clean the form after sent
                setform({
                    name : " ", email : " " , message : " "
                })
        } 
        catch (error) {
            // set the loading to false
            setloading(false);
            console.log(error)
            alert("something went wrong..")
        }
        
    }

    return(
        <section className="c-space my-10">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                 <img src="/assets/terminal.png" alt="terminal background"  className="absolute inset-0 min-h-screen"/>
                 <div className="contact-container">
                        <h3 className="head-text">Let's Connect</h3>
                        <p className="text-lg text-white-600">
                            whether you are looking to build a new webpage or a Saas Platform , or improve your existing system , or bring an unique project to the life , I am here to help you.
                        </p>
                        {/**form  for connect */}
                        <form ref={formref} onSubmit={handlesubmit} className="mt-12 flex flex-col space-y-10">

                            <label  className="space-y-3">
                                <span className="field-label"> Full Name</span>
                                <input
                                type = "text"
                                name = "name"
                                value = {form.name}
                                onChange = {handlechange}
                                required
                                className = "field-input"
                                placeholder = "John doe"
                                />
                            
                            </label>


                            <label  className="space-y-3">
                                <span className="field-label"> Email</span>
                                <input
                                type = "email"
                                name = "email"
                                value = {form.email}
                                onChange = {handlechange}
                                required
                                className = "field-input"
                                placeholder = "abc@xymail.com"
                                />
                            
                            </label>

                            <label  className="space-y-3">
                                <span className="field-label"> Your Message</span>
                                <textarea
                                
                                name = "message"
                                value = {form.message}
                                onChange = {handlechange}
                                required
                                rows = {5}
                                className = "field-input"
                                placeholder = "Hi, I am interested in ..."
                                />
                            
                            </label>
                            <button className="field-btn" type="submit" disabled = {loading}>
                                {loading ? "Sending..."  : "Send Message"}
                                <img src="/assets/arrow-up.png" alt="arrow-up"  className="field-btn_arrow"/>
                            </button>
                        </form>
                 </div>
            </div>
           
           
        </section>
    )
}
export default Contact;



/*import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    from_name: form.name,
                    to_name: 'Your Name',
                    from_email: form.email,
                    to_email: 'your@email.com',
                    message: form.message,
                },
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );
            
            setForm({ name: "", email: "", message: "" });
            alert("Thank you for your message. I will get back to you soon!");
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative flex flex-col max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-5xl font-bold text-center mb-2">Let's Connect</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Whether you are looking to build a new webpage or a SaaS Platform,
                improve your existing system, or bring an unique project to life,
                I am here to help you.
            </p>

            <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 max-w-2xl mx-auto w-full"
            >
                <div className="flex flex-col">
                    <label className="text-white-500 font-medium mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-black-200 py-4 px-6 text-white rounded-lg outline-none border border-white/10 font-medium"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-white-500 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-black-200 py-4 px-6 text-white rounded-lg outline-none border border-white/10 font-medium"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-white-500 font-medium mb-2">
                        Your Message
                    </label>
                    <textarea
                        rows={7}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Let me know how I can help you..."
                        required
                        className="bg-black-200 py-4 px-6 text-white rounded-lg outline-none border border-white/10 font-medium"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:opacity-90 transition-opacity disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
};

export default Contact;*/