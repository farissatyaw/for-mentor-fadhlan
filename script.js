let i = 0;

let sentences = [
"Dear Mba Yesha,",
"So this one was supposed to be a letter but my terrible handwriting felt insecure...",
"So here are my best words to close this fortune of life.", 
"Growing older, I realized that life itself has its charm.", 
"Those charms just appeared, passing by, missed, or eventually came in its own way. Its beauty, its shades, its roughness, and every single aspect of it transgress the time creating a spark of wonders.", 
"Pity that humans do not realize what they are having from those sparks, yet those who looked back did.",
"As we know and looked back, these four months started from a random set of events.", 
"Planning for an internship, joining XL Axiata, then I met Mba while wondering what is hidden in the following time.", 
"Little that I know the hourglass is out of its water, bubbling over, and it's time to flip it once again, starting anew.", 
"On this occasion of restarting miracles, I would take a moment to step back, rethink, and express what I should have, before what we have is overwritten and never comes back.",
"Every single piece of new pages opened through meeting Kampus Merdeka, XL Axiata, and especially Mba Ayesha.", 
"Had I never realized how grateful I should have been to learn the excitement of being flexibly professional, being productive in the laughter, and the joyous meal and talk we had together, between us and the BRM team.",
"As my persona added along these 4 months, wondering how many new pages are written in my “page of mind”, it really deserves a special chapter to keep it all there together once and forever.",
"Kindly this once and for all, this should be how that little kid dedicated his final “BRD” formatted: (kasi jeda lamaan juga kek delay ke selanjutnya)",
"The beginning of the chapter will say so many “Thank you, Danke!” in it, for every opportunity, guidance, support, and trust that Mba has been given along the path. Fragments of these from Mba aligned his way through this wonderful journey. (kasi waktu lamaan biar baca)",
"Cherished by the gratitudes, it also follows with the regrets and “Sorry”. Inconveniences, unskillfulness, ignorance, disrespect, and every single mistake that this newbie has committed should all never be an intention, yet he caused so many problems for Mba. This once again should be his expression of regret, his realization and atonement of mistakes, and his “tome of guidance” that will be recorded and that won’t be redone ever again.　(kasi waktu lamaan biar baca)",
"The Closing of this chapter should not be sorrowful things as above, as he decides to end the chapter with his promises, prayer, and hopes.", 
"He promised himself and every single memory he had in this timeline that he will fly higher, bringing along what has been given to him, as he moves from places to another. He will also bring the joy and motivation he had gained from his mentor to where he will be flying next, remembering that he had ever felt the magic of it, bringing the same for another will be something cherished.",
"He then also sent his best prayer towards the moments, the memories, the knowledge, and the Mentor, wishing the very best of everything that could ever happen in this world, as what his mentor had always wished the same for him. May his dear mentor always be in good health, find the best fortune, have the greatest and happiest moments in her life, blessed by her Divine one, find her best partner to accompany her for the rest, and may she be cherished and cheerful through her valuable life.",
"In shed tears of joy of the new beginning and a glimpse of fear in goodbyes, he hoped, from the deepest dark depth of his little heart, that one day, he might once again meet his dear mentor.", 
"He will then tell his tales of journey as his mentor tells her bigger world to make him learn and shut once again.", 
"He will then ask every single thing he had learned as his dear mentor answered every life doubts he had.", 
"He will then tell the greatness of his dear mentor to everyone he met as his mentor will laugh off his mistakes he always did while under her guidance.",
"May the chance comes, he then will once again find his home, reminiscing its fractures, and having the rush of emotions coming back,",
"By a simple, unintended, yet a meaningful one,", 
"By The Warmth from his Dear Mentor he had found once.",
"Goodbye is so bitter, while your sincereness carries a far off scent. \n -Violet Evergarden",
"Danke Alles Für Everything Mba.", 
"Sincerely and Truly Yours, Your Mentee"
]

const lengthSentencesIdx = [14, 15, 16, 18, 19, 20];

let time1 = 15000;
let time2 = 25000;

function clickButton(){
    
    const button = document.querySelector('.btn');
    const card = document.querySelector('.card');
    const sentences1 = document.getElementById('sentences-1');
    const sentences2 = document.getElementById('sentences-2');
    const sentences3 = document.getElementById('sentences-3');
    const sentences4 = document.getElementById('sentences-4');
    const sentences5 = document.getElementById('sentences-5');
    const sentences6 = document.getElementById('sentences-6');
    const sentences7 = document.getElementById('sentences-7');
    const sentences8 = document.getElementById('sentences-8');
    const sentences9 = document.getElementById('sentences-9');
    const sentences10 = document.getElementById('sentences-10');
    const sentences11 = document.getElementById('sentences-11');
    const sentences12 = document.getElementById('sentences-12');
    const sentences13 = document.getElementById('sentences-13');
    const sentences14 = document.getElementById('sentences-14');
    const sentences15 = document.getElementById('sentences-15');
    const sentences16 = document.getElementById('sentences-16');
    const sentences17 = document.getElementById('sentences-17');
    const sentences18 = document.getElementById('sentences-18');
    const sentences19 = document.getElementById('sentences-19');
    const sentences20 = document.getElementById('sentences-20');
    const sentences21 = document.getElementById('sentences-21');
    const sentences22 = document.getElementById('sentences-22');
    const sentences23 = document.getElementById('sentences-23');
    const sentences24 = document.getElementById('sentences-24');
    const sentences25 = document.getElementById('sentences-25');
    const sentences26 = document.getElementById('sentences-26');
    const sentences27 = document.getElementById('sentences-27');
    const sentences28 = document.getElementById('sentences-28');
    const sentences29 = document.getElementById('sentences-29');
    const sentences30 = document.getElementById('sentences-30');

    button.classList.toggle('transition-out');

    // 1
    let tempTime = time1;

    setTimeout(() => {

        button.classList.toggle('hide');
        button.classList.toggle('transition-out');
        card.classList.toggle('hide');
        card.classList.toggle('transition-in');
        sentences1.classList.toggle('hide');
        sentences1.classList.toggle('transition-in');

    }, tempTime);

    //2

    tempTime += time1;

    setTimeout(() => {
        // sentences1.classList.toggle('transition-in');
        sentences1.classList.toggle('hide');
        sentences1.classList.toggle('transition-out');

        sentences2.classList.toggle('hide');
        sentences2.classList.toggle('transition-in');

    }, tempTime);

    //3

    tempTime += time1;

    setTimeout(() => {

        sentences2.classList.toggle('hide');
        sentences2.classList.toggle('transition-out');

        sentences3.classList.toggle('hide');
        sentences3.classList.toggle('transition-in');

    }, tempTime);

    //4

    tempTime += time1;

    setTimeout(() => {

        sentences3.classList.toggle('hide');
        sentences3.classList.toggle('transition-out');

        sentences4.classList.toggle('hide');
        sentences4.classList.toggle('transition-in');

    }, tempTime);

    //5

    tempTime += time1;

    setTimeout(() => {

        sentences4.classList.toggle('hide');
        sentences4.classList.toggle('transition-out');

        sentences5.classList.toggle('hide');
        sentences5.classList.toggle('transition-in');

    }, tempTime);

    //6

    tempTime += time1;

    setTimeout(() => {

        sentences5.classList.toggle('hide');
        sentences5.classList.toggle('transition-out');

        sentences6.classList.toggle('hide');
        sentences6.classList.toggle('transition-in');

    }, tempTime);

    //7

    tempTime += time1;

    setTimeout(() => {

        sentences6.classList.toggle('hide');
        sentences6.classList.toggle('transition-out');

        sentences7.classList.toggle('hide');
        sentences7.classList.toggle('transition-in');

    }, tempTime);

    //8

    tempTime += time1;

    setTimeout(() => {

        sentences7.classList.toggle('hide');
        sentences7.classList.toggle('transition-out');

        sentences8.classList.toggle('hide');
        sentences8.classList.toggle('transition-in');

    }, tempTime);

    //9

    tempTime += time1;

    setTimeout(() => {

        sentences8.classList.toggle('hide');
        sentences8.classList.toggle('transition-out');

        sentences9.classList.toggle('hide');
        sentences9.classList.toggle('transition-in');

    }, tempTime);

    //10

    tempTime += time1;

    setTimeout(() => {

        sentences9.classList.toggle('hide');
        sentences9.classList.toggle('transition-out');

        sentences10.classList.toggle('hide');
        sentences10.classList.toggle('transition-in');

    }, tempTime);

    //11

    tempTime += time1;

    setTimeout(() => {

        sentences10.classList.toggle('hide');
        sentences10.classList.toggle('transition-out');

        sentences11.classList.toggle('hide');
        sentences11.classList.toggle('transition-in');

    }, tempTime);

    //12

    tempTime += time1;

    setTimeout(() => {

        sentences11.classList.toggle('hide');
        sentences11.classList.toggle('transition-out');

        sentences12.classList.toggle('hide');
        sentences12.classList.toggle('transition-in');

    }, tempTime);

    //13

    tempTime += time2;

    setTimeout(() => {

        sentences12.classList.toggle('hide');
        sentences12.classList.toggle('transition-out');

        sentences13.classList.toggle('hide');
        sentences13.classList.toggle('transition-in');

    }, tempTime);

    //14

    tempTime += time2;

    setTimeout(() => {

        sentences13.classList.toggle('hide');
        sentences13.classList.toggle('transition-out');

        sentences14.classList.toggle('hide');
        sentences14.classList.toggle('transition-in');

    }, tempTime);

    //15

    tempTime += time2;

    setTimeout(() => {

        sentences14.classList.toggle('hide');
        sentences14.classList.toggle('transition-out');

        sentences15.classList.toggle('hide');
        sentences15.classList.toggle('transition-in');

    }, tempTime);

    //15

    tempTime += time1;

    setTimeout(() => {

        sentences15.classList.toggle('hide');
        sentences15.classList.toggle('transition-out');

        sentences16.classList.toggle('hide');
        sentences16.classList.toggle('transition-in');

    }, tempTime);

    //16

    tempTime += time2;

    setTimeout(() => {

        sentences16.classList.toggle('hide');
        sentences16.classList.toggle('transition-out');

        sentences17.classList.toggle('hide');
        sentences17.classList.toggle('transition-in');

    }, tempTime);

    //17

    tempTime += time2;

    setTimeout(() => {

        sentences17.classList.toggle('hide');
        sentences17.classList.toggle('transition-out');

        sentences18.classList.toggle('hide');
        sentences18.classList.toggle('transition-in');

    }, tempTime);

    //18

    tempTime += time2;

    setTimeout(() => {

        sentences18.classList.toggle('hide');
        sentences18.classList.toggle('transition-out');

        sentences19.classList.toggle('hide');
        sentences19.classList.toggle('transition-in');

    }, tempTime);

    //19

    tempTime += time2;

    setTimeout(() => {

        sentences19.classList.toggle('hide');
        sentences19.classList.toggle('transition-out');

        sentences20.classList.toggle('hide');
        sentences20.classList.toggle('transition-in');

    }, tempTime);

    //20

    tempTime += time2;

    setTimeout(() => {

        sentences20.classList.toggle('hide');
        sentences20.classList.toggle('transition-out');

        sentences21.classList.toggle('hide');
        sentences21.classList.toggle('transition-in');

    }, tempTime);

    //21

    tempTime += time1;

    setTimeout(() => {

        sentences21.classList.toggle('hide');
        sentences21.classList.toggle('transition-out');

        sentences22.classList.toggle('hide');
        sentences22.classList.toggle('transition-in');

    }, tempTime);

    //22

    tempTime += time1;

    setTimeout(() => {

        sentences22.classList.toggle('hide');
        sentences22.classList.toggle('transition-out');

        sentences23.classList.toggle('hide');
        sentences23.classList.toggle('transition-in');

    }, tempTime);

    //23

    tempTime += time1;

    setTimeout(() => {

        sentences23.classList.toggle('hide');
        sentences23.classList.toggle('transition-out');

        sentences24.classList.toggle('hide');
        sentences24.classList.toggle('transition-in');

    }, tempTime);

    //24

    tempTime += time1;

    setTimeout(() => {

        sentences24.classList.toggle('hide');
        sentences24.classList.toggle('transition-out');

        sentences25.classList.toggle('hide');
        sentences25.classList.toggle('transition-in');

    }, tempTime);

    //25

    tempTime += time1;

    setTimeout(() => {

        sentences25.classList.toggle('hide');
        sentences25.classList.toggle('transition-out');

        sentences26.classList.toggle('hide');
        sentences26.classList.toggle('transition-in');

    }, tempTime);

    //26

    tempTime += time1;

    setTimeout(() => {

        sentences26.classList.toggle('hide');
        sentences26.classList.toggle('transition-out');

        sentences27.classList.toggle('hide');
        sentences27.classList.toggle('transition-in');

    }, tempTime);

    //27

    tempTime += time1;

    setTimeout(() => {

        sentences27.classList.toggle('hide');
        sentences27.classList.toggle('transition-out');

        sentences28.classList.toggle('hide');
        sentences28.classList.toggle('transition-in');

    }, tempTime);

    //28

    tempTime += time1;

    setTimeout(() => {

        sentences28.classList.toggle('hide');
        sentences28.classList.toggle('transition-out');

        sentences29.classList.toggle('hide');
        sentences29.classList.toggle('transition-in');

    }, tempTime);

    //29

    tempTime += time1;

    setTimeout(() => {

        sentences29.classList.toggle('hide');
        sentences29.classList.toggle('transition-out');

        card.classList.toggle('hide');
        card.classList.toggle('transition-out');

        button.classList.toggle('hide');
        button.classList.toggle('transition-in');

    }, tempTime);

}