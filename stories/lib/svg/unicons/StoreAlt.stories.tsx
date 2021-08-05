import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { StoreAlt, StoreAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/StoreAlt",
  component: StoreAlt,
} as ComponentMeta<typeof StoreAlt>;

const Template: ComponentStory<typeof StoreAlt> = (args: StoreAltPropsI) => (
  <x.div display="flex" gap="20px">
    <StoreAlt {...args} />
    <StoreAlt {...args} fill="red.500" />
    <StoreAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
