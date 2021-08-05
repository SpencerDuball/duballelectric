import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Subject, SubjectPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Subject",
  component: Subject,
} as ComponentMeta<typeof Subject>;

const Template: ComponentStory<typeof Subject> = (args: SubjectPropsI) => (
  <x.div display="flex" gap="20px">
    <Subject {...args} />
    <Subject {...args} fill="red.500" />
    <Subject {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
