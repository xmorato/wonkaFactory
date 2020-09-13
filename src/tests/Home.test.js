import React from 'react';
import { shallow } from 'enzyme/build'
import Home from '../pages/Home'
import Search from '../components/Search'
import Title from '../components/Title'
import OompaList from '../components/OompaList'

jest.mock("../hooks/useGetOompas", () => ({
    useGetOompas: jest.fn(),
}))

describe("Test Home component", () => {
    describe("When is loading data", () => {
        //mocking hook useGetOompas with loading state
        const mock = require('../hooks/useGetOompas').useGetOompas
        mock.mockImplementation(() => ({
            loadingNextPage: true,
            oompas: null,
            setPag: jest.fn(),
            error: null,
        }))

        const wrapper = shallow(<Home />)

        it("should render Loading", () => {
            expect(wrapper.text().toUpperCase()).toContain("LOADING")
        })
        it("should render Search component", () => {
            expect(wrapper.find(Search)).toHaveLength(1)
        })
        it("should render Title component", () => {
            expect(wrapper.find(Title)).toHaveLength(1)
        })
        it("should render OompaList component", () => {
            expect(wrapper.find(OompaList)).toHaveLength(1)
            expect(wrapper.find(OompaList).props().oompas).toBe(null)
        })
        it("should render observer div", () => {
            expect(wrapper.find("#observer")).toHaveLength(1)
        })

    })

    describe("When is loading is false and data is not null", () => {
        //mocking hook useGetOompas with data and not loading
        const mock = require('../hooks/useGetOompas').useGetOompas
        mock.mockImplementation(() => ({
            loadingNextPage: false,
            oompas: "potato",
            setPag: jest.fn(),
            error: null,
        }))

        const wrapper = shallow(<Home />)

        it("should not render Loading", () => {
            expect(wrapper.text().toUpperCase()).not.toContain("LOADING")
        })
        it("should render Search component", () => {
            expect(wrapper.find(Search)).toHaveLength(1)
        })
        it("should render Title component", () => {
            expect(wrapper.find(Title)).toHaveLength(1)
        })
        it("should render OompaList component", () => {
            expect(wrapper.find(OompaList)).toHaveLength(1)
            expect(wrapper.find(OompaList).props().oompas).toBe("potato")
        })
        it("should render observer div", () => {
            expect(wrapper.find("#observer")).toHaveLength(1)
        })

    })

})


