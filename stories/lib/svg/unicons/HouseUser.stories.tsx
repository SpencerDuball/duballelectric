import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HouseUser, HouseUserPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HouseUser",
  component: HouseUser,
} as ComponentMeta<typeof HouseUser>;

const Template: ComponentStory<typeof HouseUser> = (args: HouseUserPropsI) => (
  <x.div display="flex" gap="20px">
    <HouseUser {...args} />
    <HouseUser {...args} fill="red.500" />
    <HouseUser {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
