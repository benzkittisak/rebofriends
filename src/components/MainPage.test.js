import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe("<MainPage/>", () => {
  // test การ render
  test("expect to render MainPage component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test function ค้นหา
  // instance ก็คือเข้าถึงฟังก์ชันใน class ละกัน
  test("filters robots correctly", () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: "Benz",
          email: "benz@gmail.com",
        },
      ],
      searchField: "",
      isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toEqual([
      {
        id: 3,
        name: "Benz",
        email: "benz@gmail.com",
      },
    ]);
  });

  test("filters robots correctly2", () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: "Benz",
          email: "benz@gmail.com",
        },
      ],
      searchField: "a",
      isPending: false,
    };
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
  });
});

// redux-mock-store แพ็คเกจนี้เอามาทำ mock ตัว store ให้ redux
