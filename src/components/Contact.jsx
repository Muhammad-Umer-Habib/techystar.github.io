import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <label >Name</label>
                        <input type="text" required placeholder='Umer Pawa' />
                    </div>

                    <div>
                        <label >Email</label>
                        <input type="email" required placeholder='ABC@gmail.com' />
                    </div>

                    <div>
                        <label >Message</label>
                        <input type="text" required placeholder='Tell Us What You Need' />
                    </div>
                    <button type="submit"> Submit </button>
                </form>

            </main>

        </div>
    )
}

export default Contact
