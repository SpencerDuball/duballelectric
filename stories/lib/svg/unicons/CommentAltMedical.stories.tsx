import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltMedical, CommentAltMedicalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltMedical",
  component: CommentAltMedical,
} as ComponentMeta<typeof CommentAltMedical>;

const Template: ComponentStory<typeof CommentAltMedical> = (
  args: CommentAltMedicalPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltMedical {...args} />
    <CommentAltMedical {...args} fill="red.500" />
    <CommentAltMedical {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
