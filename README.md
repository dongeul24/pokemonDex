# 포켓몬 도감 웹페이지

<img src="https://github.com/user-attachments/assets/2d2b9bc0-a55f-4f0e-bb7c-149d73e69edc" width="300" height="300"/>
링크: ([포켓몬 도감 웹페이지 바로가기](https://pokemon-dex-puce.vercel.app/))


포켓몬 도감 웹페이지는 6개의 포켓몬 카드를 선택하고, 각각의 포켓몬 종류와 그 정보를 확인할 수 있는 웹페이지입니다.

## 사용한 기술 스택

- **React**: 사용자 인터페이스 구축을 위한 라이브러리입니다.
- **Styled-components**: 컴포넌트 기반 스타일링을 위해 사용했습니다.
- **Redux Toolkit**: 중앙 집중식 상태 관리를 위해 사용했습니다.
- **React Toastify**: 사용자에게 친숙한 UI로 추가/삭제 알림을 제공합니다.
- **React Router DOM**: 여러 페이지 간의 탐색을 위해 사용했습니다.

## 주요 기능/특징
![image](https://github.com/user-attachments/assets/35664912-872f-41e6-8e1c-c9e020597f32)


- **포켓몬 선택**: 사용자가 포켓몬을 대쉬보드에 추가할 수 있으며, 한 번 추가된 포켓몬은 다시 추가되지 못하고, 추가될 수 있는 포켓몬은 최대 6개로 제한됩니다.
- **포켓몬 삭제**: 대쉬보드에 추가된 포켓몬을 삭제할 수 있습니다.
- **추가/삭제/주의 알림(UI)**: 추가 및 삭제 작업이 성공적으로 완료되었을 때, 그리고 포켓몬을 추가할 수 없을 때 토스트 메시지로 사용자에게 알려줍니다.
- **포켓몬 상세 정보 보기**: 포켓몬 카드를 클릭하면 해당 포켓몬의 상세 정보를 확인할 수 있습니다.
- **페이지 탐색**: React Router를 사용하여 포켓몬 목록 페이지, 포켓몬 상세 페이지 간 원활한 탐색 경험을 제공합니다.
![image](https://github.com/user-attachments/assets/9a52a7d0-b676-4719-b0d6-fe275c6a2353)

## Pokemon-dex 레포지토리의 브랜치 소개
- **main**: 최종적으로 배포한 프로젝트 구성을 담고 있는 브랜치입니다.
- **props-drilling**: 상태 변화를 관리하고 업데이트하기 위해 상위 컴포넌트로부터 하위 컴포넌트로 필요한 props를 전달받아 사용하는 방식을 담은 브랜치입니다. 이 방식은 상태와 핸들러를 하위 컴포넌트에 전달해야 하기 때문에 컴포넌트 계층이 깊어질수록 관리가 어려워집니다.
- **context**: props drilling의 단점을 극복하기 위해 Context API를 사용하여 전역적으로 상태를 관리한 브랜치입니다. 이를 통해 상태 전달을 간소화하고, 더 나은 코드 가독성을 제공합니다.
- **redux-toolkit**: Redux Toolkit을 사용하여 상태 관리를 리팩터링한 브랜치입니다. 중앙 집중식 상태 관리를 통해 더 체계적이고 일관된 상태 관리가 가능합니다.

