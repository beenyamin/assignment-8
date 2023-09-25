import swal from "sweetalert";


const MultipleCard = ({ card }) => {


    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price } = card || {}

    const handleAddToDonation = () => {

        const addToDonation = [];

        const donationPage = JSON.parse(localStorage.getItem('donation'))

        if (!donationPage) {

            addToDonation.push(card)
            localStorage.setItem('donation', JSON.stringify(addToDonation))
            swal("Great Job!", "Donation Success!", "success");

        }


        else {

            const isExists = donationPage.find(card => card.id === id)

            if (!isExists) {
                
                addToDonation.push(...donationPage, card)
            localStorage.setItem('donation', JSON.stringify(addToDonation))
            swal("Good job!", "You clicked the button!", "success");

            } else {

                swal("Error!", "No Duplicate!", "error");
            }

            
        }

    
    }


    return (

        // detaile card 

        <div >

            <div className="hero w-full h-80 " style={{ backgroundImage: { Picture } }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <button onClick={handleAddToDonation} className="btn btn-secondary">Donation</button>
                </div>
            </div>

            <div className="mx-5 my-10">
                <h3 className="font-bold text-2xl ">{Title} </h3>
                <p className="font-normal text-lg py-4 ">{Description}</p>

            </div>
        </div>
    );
};

export default MultipleCard;