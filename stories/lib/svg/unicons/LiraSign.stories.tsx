import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LiraSign, LiraSignPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LiraSign",
  component: LiraSign,
} as ComponentMeta<typeof LiraSign>;

const Template: ComponentStory<typeof LiraSign> = (args: LiraSignPropsI) => (
  <x.div display="flex" gap="20px">
    <LiraSign {...args} />
    <LiraSign {...args} fill="red.500" />
    <LiraSign {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
