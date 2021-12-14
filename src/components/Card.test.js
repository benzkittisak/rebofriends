import { shallow , mount , render } from 'enzyme'; 
import Card from './Card';

describe('<Card/>', () => {
    test('expect to render Card component', () => {
        const wrapper = shallow(<Card/>)
        expect(wrapper.length).toEqual(1)
        expect(wrapper).toMatchSnapshot();
    })
    test('Should have a header ', () => {
        const wrapper = shallow(<Card/>)
        expect(wrapper.find('h2')).toHaveLength(1)
    })

    test('Should have a image', () => {
        const wrapper = shallow(<Card/>)
        expect(wrapper.find('img')).toHaveLength(1)
    })

    test('should have a props', () => {
        const wrapper = shallow(<Card/>)
        expect(wrapper.props()).not.toBeNull();
    })
    
});
