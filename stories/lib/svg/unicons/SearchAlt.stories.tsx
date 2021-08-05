import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SearchAlt, SearchAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SearchAlt",
  component: SearchAlt,
} as ComponentMeta<typeof SearchAlt>;

const Template: ComponentStory<typeof SearchAlt> = (args: SearchAltPropsI) => (
  <x.div display="flex" gap="20px">
    <SearchAlt {...args} />
    <SearchAlt {...args} fill="red.500" />
    <SearchAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
