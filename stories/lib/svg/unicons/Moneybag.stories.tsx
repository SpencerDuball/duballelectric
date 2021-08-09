import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Moneybag, MoneybagPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Moneybag",
  component: Moneybag,
} as ComponentMeta<typeof Moneybag>;

const Template: ComponentStory<typeof Moneybag> = (args: MoneybagPropsI) => (
  <x.div display="flex" gap="20px">
    <Moneybag {...args} />
    <Moneybag {...args} fill="red.500" />
    <Moneybag {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
