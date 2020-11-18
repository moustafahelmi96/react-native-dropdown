import React, { useState, useRef, useEffect } from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import Carousel from "react-native-snap-carousel";
import styled from "styled-components";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const DropdownModal = ({
  items,
  showDropdown,
  setShowDropdown,
  buttonTitle,
  itemsColor,
  buttonColor,
  separatorColor,
  backgroundColor,
  setSelected,
  onSelect,
  value,
  modalWidth,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const carousel = useRef(null);

  const onSnapToItem = (selectedInd) => {
    setIndex(selectedInd);
  };
  const handleMarker = (index) => {
    carousel.snapToItem(index, true);
  };

  useEffect(() => {
    const res = items.findIndex((x) => x.value === value);
    setSelectedIndex(res);
    setIndex(res);
    setSelected(items[res]);
  }, [value]);

  return (
    <Modal
      isVisible={showDropdown}
      deviceWidth={modalWidth ? modalWidth : screenWidth}
      onBackdropPress={() => setShowDropdown(false)}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <ModalContainer>
        <ButtonContainer>
          {buttonTitle && (
            <Button
              onPress={() => {
                const chosenIndex = index >= 0 ? index : 0
                setShowDropdown(false);
                setSelectedIndex(chosenIndex);
                setSelected(items[chosenIndex]);
                onSelect(items[chosenIndex]);
              }}
            >
              <ButtonText buttonColor={buttonColor}>{buttonTitle}</ButtonText>
            </Button>
          )}
        </ButtonContainer>
        <Container backgroundColor={backgroundColor}>
          <OuterModalContainer>
            {items && items.length > 0 ? <Carousel
              ref={carousel}
              vertical={true}
              inactiveSlideOpacity={0.3}
              windowSize={screenHeight}
              sliderHeight={screenHeight * 0.3}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              itemHeight={screenHeight * 0.05}
              data={items}
              onSnapToItem={onSnapToItem}
              onLayout={() => {
                carousel.current.snapToItem(selectedIndex, true);
              }}
              renderItem={({item, index}) =>
                <ModalItemContainer key={index} seperatorColor={separatorColor}>
                  <ModalItemText itemsColor={itemsColor}>
                    {item.key}
                  </ModalItemText>
                </ModalItemContainer>
              )}
            />
          </OuterModalContainer>
        </Container>
      </ModalContainer>
    </Modal>
  );
};
export default DropdownModal;

const ModalContainer = styled.View`
  width: ${screenWidth}px;
  align-self: center;
  height: ${screenHeight * 0.3}px;
`;
const Container = styled.View`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgb(208,212,218)"};
  height: ${screenHeight * 0.3}px;
`;
const ModalItemContainer = styled.View`
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.05}px;
  align-self: center;
  justify-content: center;
`;
const ModalItemText = styled.Text`
  text-align: center;
  font-size: ${20}px;
  color: ${({ itemsColor }) => itemsColor || "black"};
`;
const ButtonContainer = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight * 0.05}px;
  justify-content: center;
  background-color: rgb(240, 241, 242);
`;
const Button = styled.TouchableOpacity`
  width: ${screenWidth * 0.2}px;
  justify-content: center;
`;
const ButtonText = styled.Text`
  text-align: center;
  font-size: ${20}px;
  color: ${({ buttonColor }) => buttonColor || "black"};
`;
const OuterModalContainer = styled.SafeAreaView`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgb(208,212,218)"};
  height: ${screenHeight * 0.3}px;
`;
