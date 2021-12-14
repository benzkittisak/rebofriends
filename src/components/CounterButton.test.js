import { shallow , mount , render } from 'enzyme'; 
import CounterButton from './CounterButton';

describe('<CounterButton/>', () => {
    test('expect to render CounterButton component', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor}/>)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('corrently increments the counter', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor}/>)
        
        wrapper.find('button#counter').simulate('click')
        expect(wrapper.state()).toEqual({count:2})

        wrapper.find('button#counter').simulate('keypress')
        expect(wrapper.state()).toEqual({count:2})

        expect(wrapper.props().color).toEqual('red')

    })
    
});
