// 함수 정의: 환영 메시지 표시
function showWelcomeMessage() {
    alert('환영합니다! 이 페이지에 방문해주셔서 감사합니다.');
}

// 함수 정의: 부드럽게 스크롤
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 함수 정의: 현재 날짜 및 시간 표시
function displayCurrentDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    document.getElementById('current-date-time').innerText = dateTimeString;
}

// 좋아요, 싫어요 카운터 변수
var likeCount = 0;
var dislikeCount = 0;

// 함수 정의: 좋아요 클릭
function like() {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
}

// 함수 정의: 싫어요 클릭
function dislike() {
    dislikeCount++;
    document.getElementById('dislike-count').innerText = dislikeCount;
}

// 함수 정의: 피드백 폼 제출
function submitFeedback(event) {
    event.preventDefault();
    var feedbackInput = document.getElementById('feedback-input').value;
    if (feedbackInput) {
        var feedbackList = document.getElementById('feedback-list');
        var newFeedback = document.createElement('li');
        newFeedback.innerText = feedbackInput;
        feedbackList.appendChild(newFeedback);
        document.getElementById('feedback-form').reset();
    } else {
        alert('의견을 입력해 주세요.');
    }
}

// 함수 정의: 선택한 사이트로 이동
function goToSelectedSite() {
    var siteSelect = document.getElementById('site');
    var selectedSite = siteSelect.value;
    window.location.href = selectedSite;
}

// 함수 정의: 선택한 책 이미지 그리기
function drawBookImage() {
    var canvas = document.getElementById('book-canvas');
    var ctx = canvas.getContext('2d');
    var bookSelect = document.getElementById('book-select');
    var selectedBook = bookSelect.value;
    var img = new Image();
    img.src = selectedBook;

    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 지움
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 이미지를 캔버스에 그림
    };
}

// 페이지 로드 시 현재 날짜와 시간 표시 및 이벤트 리스너 추가
window.onload = function() {
    showWelcomeMessage();
    displayCurrentDateTime();
    setInterval(displayCurrentDateTime, 1000); // 1초마다 현재 날짜와 시간 업데이트

    document.getElementById('like-btn').addEventListener('click', like);
    document.getElementById('dislike-btn').addEventListener('click', dislike);
    document.getElementById('feedback-form').addEventListener('submit', submitFeedback);
    document.getElementById('go-to-site-btn').addEventListener('click', goToSelectedSite);
    document.getElementById('draw-book-btn').addEventListener('click', drawBookImage);
    document.getElementById('toggle-photo-btn').addEventListener('click', togglePhotoVisibility);
}

// 함수 정의: 선택한 책 이미지 그리기
function drawBookImage() {
    var canvas = document.getElementById('book-canvas');
    var ctx = canvas.getContext('2d');
    var bookSelect = document.getElementById('book-select');
    var selectedBook = bookSelect.value;
    var img = new Image();
    img.src = selectedBook;

    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 지움
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 이미지를 캔버스에 그림
    };
}

// 함수 정의: 사진 보기 버튼 클릭 시 이미지 토글
function togglePhotoVisibility() {
    var photo = document.getElementById('project2-photo');
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
    } else {
        photo.style.display = 'none';
    }
}

