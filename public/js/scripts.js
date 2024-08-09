const cardList = [
    {
        title: "Kitten 2",
        image: "images/kitten2.png",
        link: "About Kitten 2",
        desciption: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten3.jpg",
        link: "About Kitten 3",
        desciption: "Demo desciption about kitten 3"
    }
]

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
    let formData = {
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        phone_model: $('#phone_model').val(),
        email: $('#email').val()
    };
    
    $.ajax({
        url: '/submit-inquiry',
        type: 'POST',
        data: formData,
        success: (response) => {
            alert(response);
            console.log("Form Data Submitted: ", formData);
        },
        error: (error) => {
            alert("There was an error submitting your inquiry.");
            console.error("Error: ", error);
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
})


const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
            '</div><div class="card-content">'+
            '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
            '<div class="card-reveal">'+
            '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
            '<p class="card-text">'+item.desciption+'</p>'+
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
})
