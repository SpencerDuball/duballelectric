import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderMedical, FolderMedicalPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderMedical",
  component: FolderMedical,
} as ComponentMeta<typeof FolderMedical>;

const Template: ComponentStory<typeof FolderMedical> = (
  args: FolderMedicalPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderMedical {...args} />
    <FolderMedical {...args} fill="red.500" />
    <FolderMedical {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
