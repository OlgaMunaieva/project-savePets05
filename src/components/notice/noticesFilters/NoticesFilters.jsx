// import { useState } from 'react';
import { Formik } from 'formik';
import {
  Wrapper,
  BtnToOpen,
  DropdownWrapper,
  Text,
  Icon,
  SubMenu,
  BtnFilter,
  Label,
  Forma,
  Input,
  BtnLabel,
} from './NoticesFilters.styled';
import icons from '../../../images/icons/icons-card.svg';
import { useState } from 'react';

// const NoticesFilters = ({ onFilter, filters }) => {
const NoticesFilters = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [ageOpen, setAgeOpen] = useState(false);
  // const [genderOpen, setGenderOpen] = useState(false);
  const [rotationAge, setRotationAge] = useState(0);
  const [rotationGender, setRotationGender] = useState(0);

  const handleBtnClick = () => {
    setRotationAge(0);
    setRotationGender(0);
    // setIsOpen(prevState => !prevState);
  };

  const handleAgeClick = () => {
    setRotationAge(rotationAge => rotationAge + 180);
    // setAgeOpen(prevState => !prevState);
  };

  const handleGenderClick = () => {
    setRotationGender(rotationGender => rotationGender + 180);

    // setGenderOpen(prevState => !prevState);
  };

  return (
    <Wrapper>
      <BtnToOpen
        type="button"
        onClick={handleBtnClick}
        aria-label="toggle filters"
      >
        Filter
      </BtnToOpen>
      {/* {isOpen && ( */}
      <DropdownWrapper>
        <div>
          <Text>Filters</Text>
          <SubMenu>
            <BtnFilter
              type="button"
              onClick={handleAgeClick}
              aria-label="toggle age options"
            >
              <Icon
                width={24}
                height={24}
                style={{ transform: `rotate(${rotationAge}deg)` }}
              >
                <use href={icons + '#chevron-down'}></use>
              </Icon>
              <BtnLabel>By age</BtnLabel>
            </BtnFilter>
            {/* {ageOpen && ( */}
            {/* <Formik initialValues={{ age: filters }}> */}
            <Formik>
              <Forma>
                <Label>
                  <Input type="checkbox" name="age" value="0-12 m" />
                  0-12 m
                </Label>
                <Label>
                  <Input type="checkbox" name="age" value="1 year" />1 year
                </Label>
                <Label>
                  <Input type="checkbox" name="age" value="2 years +" />2 year +
                </Label>
              </Forma>
            </Formik>
            {/* )} */}
          </SubMenu>
          <SubMenu>
            <BtnFilter
              type="button"
              onClick={handleGenderClick}
              aria-label="toggle gender options"
            >
              <Icon
                width={24}
                height={24}
                style={{ transform: `rotate(${rotationGender}deg)` }}
              >
                <use href={icons + '#chevron-down'}></use>
              </Icon>
              <BtnLabel>By gender</BtnLabel>
            </BtnFilter>
            {/* {genderOpen && ( */}
            {/* <Formik initialValues={{ gender: filters }}> */}
            <Formik>
              <Forma>
                <Label>
                  <Input type="checkbox" name="gender" value="male" />
                  male
                </Label>
                <Label>
                  <Input type="checkbox" name="gender" value="female" />
                  female
                </Label>
              </Forma>
            </Formik>
            {/* )} */}
          </SubMenu>
        </div>
      </DropdownWrapper>
      {/* )} */}
    </Wrapper>
  );
};

export default NoticesFilters;
