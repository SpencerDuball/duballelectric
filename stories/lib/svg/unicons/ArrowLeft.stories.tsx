import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowLeft, ArrowLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowLeft",
  component: ArrowLeft,
} as ComponentMeta<typeof ArrowLeft>;

const Template: ComponentStory<typeof ArrowLeft> = (args: ArrowLeftPropsI) => (
  <x.div display="flex" gap="20px">
    <ArrowLeft {...args} />
    <ArrowLeft {...args} fill="red.500" />
    <ArrowLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
