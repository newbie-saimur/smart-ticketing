let buttons = document.querySelectorAll('.seat-toggle-btn');
let count = 0;

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let flag = true;
        if (this.classList.contains('toggle-btn')) {
            count -= 1;
            if (document.getElementById('coupon-input-field').classList.contains('hidden')) restoreCouponDiscount();
            removeTicketFromSummary(button.innerText);
            flag = false;
            updatePrice();
        }
        else count += 1;
        if (count === 5) {
            count -= 1;
            return;
        }
        this.classList.toggle('seat-btn');
        this.classList.toggle('toggle-btn');
        document.getElementById('seat-available').innerText = 40 - count;
        document.getElementById('seat-selected').innerText = count;
        if (flag) {
            addTicketToSummary(button.innerText);
            updatePrice();
            if (document.getElementById('coupon-input-field').classList.contains('hidden')) restoreCouponDiscount();
        }
    });
});

function addTicketToSummary(seatNo) {
    const tickets = document.getElementById('seat-list');
    tickets.innerHTML += `
    <div id="${seatNo}" class="flex justify-between">
        <p class="w-3/8 text-base font-normal text-[rgba(3,7,18,0.60)]">${seatNo}</p>
        <p class="w-3/8 text-base font-normal text-[rgba(3,7,18,0.60)]">Economy</p>
        <p class="w-2/8 text-base font-normal text-[rgba(3,7,18,0.60)] text-right">550</p>
    </div>
    `;
}

function restoreCouponDiscount() {
    document.getElementById('coupon-input-field').classList.remove('hidden');
    document.getElementById('discount-price-field').classList.replace('flex', 'hidden');
}

function updatePrice() {
    document.getElementById('total-price').innerText = count * 550;
    document.getElementById('grand-total-price').innerText = count * 550;
}

function removeTicketFromSummary(seatNo) {
    const ticket = document.getElementById(seatNo);
    if (ticket) ticket.remove();
}

document.getElementById('coupon-apply').addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-field').value;
    console.log(couponCode);
    if (couponCode == 'NEW15' || couponCode == 'Couple20') {
        document.getElementById('coupon-input-field').classList.add('hidden');
        document.getElementById('discount-price-field').classList.replace('hidden', 'flex');
        let discount = 0;
        if (couponCode == 'NEW15') discount = Math.round((count * 550) * 0.15);
        else discount = Math.round((count * 550) * 0.2);
        document.getElementById('discount-price').innerText = discount;
        document.getElementById('grand-total-price').innerText -= discount;
        document.getElementById('coupon-field').value = '';
    }
});

const popup = document.getElementById('confirmation-popup');

document.getElementById('confirm-purchase').addEventListener('click', function(){
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    if (!name.value) {
        name.value = 'Enter your name.';
        return;
    }

    if (!/^\d{11}$/.test(phone.value)) {
        phone.value = 'Enter a valid number.';
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) {
        email.value = 'Enter a valid email.';
        return;
    }

    document.getElementById('form').reset();
    // Showing popup
    popup.style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function(){
    popup.style.display = 'none';
});

popup.addEventListener('click', function(event){
    if(event.target === popup) popup.style.display = 'none';
});