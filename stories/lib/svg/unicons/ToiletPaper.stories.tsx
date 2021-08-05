import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ToiletPaper, ToiletPaperPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ToiletPaper",
  component: ToiletPaper,
} as ComponentMeta<typeof ToiletPaper>;

const Template: ComponentStory<typeof ToiletPaper> = (
  args: ToiletPaperPropsI
) => (
  <x.div display="flex" gap="20px">
    <ToiletPaper {...args} />
    <ToiletPaper {...args} fill="red.500" />
    <ToiletPaper {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
