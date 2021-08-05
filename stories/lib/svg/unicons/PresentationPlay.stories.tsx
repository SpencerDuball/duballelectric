import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PresentationPlay, PresentationPlayPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PresentationPlay",
  component: PresentationPlay,
} as ComponentMeta<typeof PresentationPlay>;

const Template: ComponentStory<typeof PresentationPlay> = (
  args: PresentationPlayPropsI
) => (
  <x.div display="flex" gap="20px">
    <PresentationPlay {...args} />
    <PresentationPlay {...args} fill="red.500" />
    <PresentationPlay {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
