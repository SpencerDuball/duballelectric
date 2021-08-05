import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AngleRightB, AngleRightBPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AngleRightB",
  component: AngleRightB,
} as ComponentMeta<typeof AngleRightB>;

const Template: ComponentStory<typeof AngleRightB> = (
  args: AngleRightBPropsI
) => (
  <x.div display="flex" gap="20px">
    <AngleRightB {...args} />
    <AngleRightB {...args} fill="red.500" />
    <AngleRightB {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
