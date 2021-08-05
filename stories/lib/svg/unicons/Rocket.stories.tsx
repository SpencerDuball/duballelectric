import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Rocket, RocketPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Rocket",
  component: Rocket,
} as ComponentMeta<typeof Rocket>;

const Template: ComponentStory<typeof Rocket> = (args: RocketPropsI) => (
  <x.div display="flex" gap="20px">
    <Rocket {...args} />
    <Rocket {...args} fill="red.500" />
    <Rocket {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
